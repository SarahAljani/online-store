// import { useSelector, useDispatch } from "react-redux";
// import { updateUserReturnDate } from "../redux/actions/actions"; // Import the new action
// import React, { useEffect, useState } from "react";
// import { Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import ReturnModal from "../Components/modals/ReturnModale";
// import CartTable from "../Components/cards/CartTable";
// const Cart = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   const [calculatedReturnDay, setCalculatedReturnDay] = useState(null);
  

//   useEffect(() => {
//     if (calculatedReturnDay) {
//       dispatch(updateUserReturnDate(calculatedReturnDay)); // Dispatch action to update the return date in Redux
//     }
//   }, [calculatedReturnDay, dispatch]);

//   const handleContinue = () => {
//     navigate(`stepper`);
//   };

//   return (
//     <div
//       style={{
//         width: "100%",
//         minHeight: "70vh",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "space-between",
//         justifySelf: "center",
//         margin: "0 auto",
//       }}
//     >
//       <CartTable />
//       <Button
//         onClick={() => handleOpen()}
//         sx={{
//           width: "100px",
//           bottom: "0",
//         }}
//       >
//         Continue
//       </Button>
//       <ReturnModal
//         handleContinue={handleContinue}
//         open={open}
//         handleClose={handleClose}
//         calculatedReturnDay={calculatedReturnDay}
//         setCalculatedReturnDay={setCalculatedReturnDay}
//       />
//     </div>
//   );
// };

// export default Cart;
