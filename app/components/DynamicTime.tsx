"use client";

import { formatDistanceStrict } from "date-fns";

export default function DynamicTime() {
  return (
    <p>
      <small>
        {formatDistanceStrict(new Date(), new Date(2025, 4, 14), {
          unit: "month",
          roundingMethod: "ceil",
        })} and counting...
      </small>
    </p>
  );
}
