

 
//   import { useState } from 'react';
// const Modal = ({ isOpen=0, onClose=0, children=0 }) => {
// 	if (!isOpen) return null;
  
// 	return (
// 	  <div className="modal">
// 		<div className="modal-content">
// 		  <span className="close" onClick={onClose}>
// 			&times;
// 		  </span>
// 		  {children}
// 		</div>
// 	  </div>
// 	);
//   };
  
//   export default Modal;



// const CustomModal = ({ isOpen=false, onClose=false, children=false }) => {
//   const [modalOpen, setModalOpen] = useState(isOpen);

//   const closeModal = () => {
//     setModalOpen(false);
//     onClose();
//   };

//   return (
//     <>
//       {modalOpen && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={closeModal}>
//               &times;
//             </span>
//             {children}
//           </div>
//         </div>
//       )}
//       <style jsx>{`
//         /* Style your modal here */
//         .modal {
//           /* Styling for modal container */
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background-color: rgba(0, 0, 0, 0.5);
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           z-index: 999;
//         }
//         .modal-content {
//           /* Styling for modal content */
//           background-color: white;
//           padding: 20px;
//           border-radius: 8px;
//           position: relative;
//           max-width: 80%;
//           max-height: 80%;
//           overflow: auto;
//         }
//         .close {
//           /* Styling for close button */
//           position: absolute;
//           top: 10px;
//           right: 10px;
//           cursor: pointer;
//         }
//       `}</style>
//     </>
//   );
// };

// export default CustomModal;
