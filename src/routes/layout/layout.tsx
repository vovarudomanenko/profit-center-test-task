import { Outlet, useNavigate } from "react-router-dom";
import ReactModal from "react-modal";
import { routePaths } from "../../constants/route.constant";

export const LayoutRoute = () => {
  const navigate = useNavigate();
  return (
    <ReactModal
      isOpen={true}
      onRequestClose={() => {
        navigate(routePaths.home);
      }}
      style={{
        overlay: {
          justifyItems: "center",
          alignItems: "center",
          background: "rgba(0, 0, 0, 0.4)",
          display: "grid",
          zIndex: 999999,
          position: "fixed",
        },
        content: {
          width: 520,
          height: 359,
          border: "none",
          padding: 20,
          background: "white",
          borderRadius: 0,
          position: "relative",
        },
      }}
    >
      <Outlet />
    </ReactModal>
  );
};
