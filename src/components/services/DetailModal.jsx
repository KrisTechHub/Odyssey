import React from 'react';
import PropTypes from 'prop-types';


export default function DetailModal ({ data, position, onClose }) {
    return (
        <div className="absolute z-40" style={{ top: position.top, left: position.left }}>
            <div className="bg-blue-gray-200 p-4 rounded-lg">
                <h2 className="text-xl font-bold">{data.name}</h2>
                <p className="mt-2">{data.description}</p>
                <button onClick={onClose} className='cursor-pointer mt-4 bg-black text-white px-4 py-2 rounded'>
                    Close
                </button>
            </div>
      </div>
    );
}

DetailModal.propTypes = {
    data: PropTypes.object.isRequired,
    position: PropTypes.shape({
        top: PropTypes.number,
        left: PropTypes.number,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
  };