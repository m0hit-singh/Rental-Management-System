import React from "react";

function StreamCard({ index, item, GetCategoryImage }) {
  return (
    <div className="col-md-3 streamcard-mobile" key={index}>
      <div
        className="stream"
        // onClick={() => props.onSelect(props.data.qId)}
      >
        <div className="stream-image">
          <img
            src={GetCategoryImage(item.image)}
            className="stream-img-logo"
            alt="stream logo"
          ></img>
        </div>
        <div className="stream-name">
          <span>{item.name}</span>
        </div>
      </div>
    </div>
  );
}

// function StreamCard({ index, item, GetCategoryImage }) {
//   return (
//     <div className="col-md-3 categoryCard streamcard-mobile" key={index}>
//       <div
//         className="card border-primary border-secondary mb-3"
//         style={{ width: "400px" }}
//       >
//         <img
//           className="card-img-top"
//           src={GetCategoryImage(item.image)}
//           alt="Card"
//         />
//         <div className="card-body">
//           {/* <h4 className="card-title">John Doe</h4> */}
//           <p className="card-text">{item.name}</p>
//           <a href="#" className="btn btn-primary">
//             See Profile
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

export default StreamCard;
