import React, { useState } from "react";
import { useQuery } from "react-apollo";
import { useProduct } from "vtex.product-context";
import { useCssHandles } from "vtex.css-handles";
import { TimeSplit } from "./typings/global";
import { tick, getTwoDaysFromNow } from "./utils/time";
import productReleaseDate from "./graphql/productReleaseDate.graphql";

interface CountdownProps {
  targetDate?: string;
}

const DEFAULT_TARGET_DATE = getTwoDaysFromNow();
const CSS_HANDLES = ["countdown"];

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({}) => {
  const handles = useCssHandles(CSS_HANDLES);
  const [timeRemaining, setTime] = useState<TimeSplit>({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const { product } = useProduct();
  const { data, loading, error } = useQuery(productReleaseDate, {
    variables: {
      slug: product?.linkText,
    },
    ssr: false,
  });

  if (!product) {
    return (
      <div>
        <span>There is no product context.</span>
      </div>
    );
  }

  if (loading) {
    return (
      <div>
        <span>Loading...</span>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <span>Error!</span>
      </div>
    );
  }

  tick(data?.product?.releaseDate || DEFAULT_TARGET_DATE, setTime);

  return (
    <div className={`${handles.countdown} db tc c-muted-1`}>
      <h1>{`${timeRemaining.hours}-${timeRemaining.minutes}-${timeRemaining.seconds}`}</h1>
    </div>
  );
};

Countdown.schema = {
  title: "editor.countdown.title",
  description: "editor.countdown.description",
  type: "object",
  properties: {
    targetDate: {
      title: "Data final",
      description: "Data final utilizada no contador",
      type: "string",
      default: null,
    },
  },
};

export default Countdown;
