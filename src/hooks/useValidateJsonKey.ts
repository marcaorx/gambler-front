import { useEffect, useState } from "react";

export function useValidateJsonKey(key: string) {
  const [isKeyValidated, setIsKeyValidated] = useState(false);

  useEffect(() => {
    const jsonLeonConfig = JSON.parse(localStorage.getItem(key) as string);
    const timeDifference = Date.now() - jsonLeonConfig.dateSaved;
    const hoursDifference = timeDifference / (1000 * 60 * 60);

    if (hoursDifference > 2) {
      setIsKeyValidated(false);
    }

    if (jsonLeonConfig.value === true) {
      setIsKeyValidated(true);
    }
  }, []);

  return { isKeyValidated };
}
