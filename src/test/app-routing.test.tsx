import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { internshipPlans, REGISTRATION_FORM_URL } from "@/routes/index";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("offers the requested 15, 30, and 45 day internship durations", () => {
    expect(internshipPlans.map((plan) => plan.durationDays)).toEqual([15, 30, 45]);
  });

  it("points every internship plan to the supplied registration form", () => {
    expect(internshipPlans.map((plan) => plan.registrationUrl)).toEqual([
      REGISTRATION_FORM_URL,
      REGISTRATION_FORM_URL,
      REGISTRATION_FORM_URL,
    ]);
    expect(REGISTRATION_FORM_URL).toBe("https://forms.gle/y4tVAwc8MxCHScDU9");
  });
});
