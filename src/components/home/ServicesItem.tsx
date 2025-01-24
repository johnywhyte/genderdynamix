import React from "react";

function ServicesItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="text-white flex flex-col ">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm font-light">{desc}</p>
    </div>
  );
}

export default ServicesItem;
