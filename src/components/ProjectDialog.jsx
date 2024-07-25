import React from "react";

function ProjectDialog({ open, handler, children }) {
  // Prevent dialog from closing when clicking inside the dialog
  const handleDialogClick = (event) => {
    event.stopPropagation();
  };

  // Close dialog when clicking outside of it
  const handleBackgroundClick = () => {
    handler();
  };

  if (!open) return null;

  return (
    <div
      className="z-40 fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-xl"
      onClick={handleBackgroundClick}
    >
      <div
        className="bg-black/90 rounded-lg shadow-lg w-full max-w-lg mx-10 flex flex-col max-h-[90vh] overflow-hidden"
        onClick={handleDialogClick}
      >
        <div className="p-4 border-b">
          <p className="text-2xl font-semibold">Pulindu</p>
        </div>
        <div className="p-4 flex-1 overflow-y-auto scrollbar-hidden">
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem neque architecto consequuntur aut pariatur ut, distinctio tempore delectus deserunt adipisci ipsum harum mollitia velit non excepturi repudiandae nihil ratione a? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem neque architecto consequuntur aut pariatur ut, distinctio tempore delectus deserunt adipisci ipsum harum mollitia velit non excepturi repudiandae nihil ratione a? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem neque architecto consequuntur aut pariatur ut, distinctio tempore delectus deserunt adipisci ipsum harum mollitia velit non excepturi repudiandae nihil ratione a? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem neque architecto consequuntur aut pariatur ut, distinctio tempore delectus deserunt adipisci ipsum harum mollitia velit non excepturi repudiandae nihil ratione a?
          </p>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem neque architecto consequuntur aut pariatur ut, distinctio tempore delectus deserunt adipisci ipsum harum mollitia velit non excepturi repudiandae nihil ratione a? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem neque architecto consequuntur aut pariatur ut, distinctio tempore delectus deserunt adipisci ipsum harum mollitia velit non excepturi repudiandae nihil ratione a? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem neque architecto consequuntur aut pariatur ut, distinctio tempore delectus deserunt adipisci ipsum harum mollitia velit non excepturi repudiandae nihil ratione a? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem neque architecto consequuntur aut pariatur ut, distinctio tempore delectus deserunt adipisci ipsum harum mollitia velit non excepturi repudiandae nihil ratione a?
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default ProjectDialog;
