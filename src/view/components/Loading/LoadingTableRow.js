import LoadingSpinner from "./LoadingSpinner.js";
import { BarLoader } from "react-spinners";
import React from "react";

// TODO Por a funcionar
function LoadingTableRow() {
  return (
    <tr>
      <td colSpan="100">
        <BarLoader loading={true} css="display: block; margin: 0 auto;" />
      </td>
    </tr>
  );
}

export default LoadingTableRow;
