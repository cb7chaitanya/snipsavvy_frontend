"use client";
import React, { useState } from "react";

export default function AddModal() {
  const [modal, setModal] = useState(1);
  return (
    <div>
      <button onClick={() => setModal(modal + 1)}>add more</button>
      add {modal}
    </div>
  );
}
