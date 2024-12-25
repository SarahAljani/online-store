import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useSpring, animated } from "@react-spring/web";

const Fade = React.forwardRef(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;

  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 3,
  height: "auto",
};

export default function DeleteModal({ show, setShow, handleDelete }) {
  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={show}
        onClose={() => setShow(false)} // Corrected to use a function
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={show}>
          <Box sx={modalStyle}>
            <Box sx={{ display: "flex", gap: 3 }}>
              <h4>Are You Sure You Want To Delete?</h4>
            </Box>
            <Button
              onClick={handleDelete} // Call the delete handler
              sx={{
                backgroundColor: "#fa3403",
                color: "white",
                marginRight: "25px",
                marginTop: "25px",
              }}
            >
              YES!
            </Button>
            <Button
              onClick={() => setShow(false)} // Corrected to use a function
              sx={{
                backgroundColor: "#5a5a5a",
                color: "white",
                marginTop: "25px",
              }}
            >
              NO
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
