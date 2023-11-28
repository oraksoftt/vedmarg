// // components/FormPopup.js
// import { useState } from "react";
// import Modal from "react-modal";

// Modal.setAppElement("#__next");

// const FormPopup = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     closeModal();
//   };

//   return (
//     <div>
//       <button onClick={openModal}>Open Form</button>
//       <Modal isOpen={isOpen} onRequestClose={closeModal}>
//         <form onSubmit={handleSubmit}>
//           <label>
//             Name:
//             <input type="text" name="name" />
//           </label>
//           <br />
//           <label>
//             Mobile No:
//             <input type="text" name="mobile" />
//           </label>
//           <br />
//           <label>
//             Email:
//             <input type="email" name="email" />
//           </label>
//           <br />
//           <label>
//             School Name:
//             <input type="text" name="school" />
//           </label>
//           <br />
//           <button type="submit">Submit</button>
//         </form>
//       </Modal>
//     </div>
//   );
// };

// export default FormPopup;
