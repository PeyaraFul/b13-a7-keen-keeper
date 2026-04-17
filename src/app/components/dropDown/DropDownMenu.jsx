"use client";

const DropDownMenu = () => {
  return (
    <>
      <select
        onChange={filterHandle}
        defaultValue="Pick a color"
        className="select mt-4"
      >
        <option disabled={true} className="hidden">
          Filter Timeline
        </option>
        <option value="Call">Call</option>
        <option value="Text">Text</option>
        <option value="Video">Video</option>
      </select>
    </>
  );
};

export default DropDownMenu;
