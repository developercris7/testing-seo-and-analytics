import mixpanel from "mixpanel-browser";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useMixpanelPageTrack = (page) => {
  const location = useLocation();
  useEffect(() => {
    mixpanel.track(`${page} view`, {
      $current_url: location.pathname,
    });
  }, [location]);
}; 

export default useMixpanelPageTrack;
