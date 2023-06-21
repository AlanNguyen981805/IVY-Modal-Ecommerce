import React from 'react';
import Left from './components/Left';
import Right from './components/Right';

const DatHang = () => {
    return (
        <div className="flex gap-6 pb-10 border-b mt-28">
        <div className="w-3/5">
            <Left />
        </div>
        <div className="w-2/5">
            <Right />
        </div>
      </div>
    );
};

export default DatHang;