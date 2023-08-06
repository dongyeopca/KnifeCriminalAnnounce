import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Portal from './Portal';

interface tableItemProps {
  location: string;
  time: string;
  other: string;
  message: string;
}
function TableItem({ location, time, other, message }: tableItemProps) {
  const [modal, setModal] = useState(false);
  return (
    <>
      <tr
        className="flex shadow-md bg-white p-2 mb-5 justify-around rounded-lg cursor-pointer"
        onClick={() =>
          setModal((prev) => {
            return !prev;
          })
        }
      >
        <td className="flex-1 text-center text-black">{location}</td>
        <td className="flex-1 text-center text-black">{time}</td>
        <td className="flex-1 text-center text-black" onClick={(e) => e.stopPropagation()}>
          <a href={other}>[기사 바로가기]</a>
        </td>
      </tr>
      {modal && createPortal(<Portal domHandler={setModal} location={location} time={time} other={other} message={message} />, document.body)}
    </>
  );
}

export default TableItem;
