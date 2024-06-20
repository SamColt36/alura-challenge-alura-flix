import { IoCloseCircleOutline } from "react-icons/io5";
import Form from "./Form";
import { useRef } from "react";

import { useVideosContext } from "hooks/useVideosContext";

export default function EditCard() {
  const {
    videoForm,
    videoSelected,
    setSelectedVideo,
    fnResetForm,
    fnEditVideo,
  } = useVideosContext();
  const dialogRef = useRef();

  function fnClose() {
    dialogRef.current.close();
    setSelectedVideo(null);
  }

  return (
    <>
      {videoSelected && (
        <>
          <span className="fixed top-0 bottom-0 left-0 right-0 bg-black/90"></span>

          <dialog
            open
            ref={dialogRef}
            className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full h-full bg-black/75"
          >
            <div className="relative p-4 space-y-6 border border-gray-700 rounded-lg bg-dark sm:p-10 md:p-10 lg:p-16 xl:p-16 xl:min-w-[575px]">
              <IoCloseCircleOutline
                formMethod="dialog"
                onClick={fnClose}
                color="white"
                className="absolute text-3xl cursor-pointer top-2 right-2"
              />
              <h2 className="text-3xl font-semibold text-emphisis lg:text-4xl xl:text-4xl">
                Editar Vídeo:
              </h2>
              <Form
                fnClose={fnClose}
                fnSubmit={() => {
                  fnEditVideo(videoSelected.id, videoForm);
                  fnResetForm();
                  alert("Vídeo atualizado");
                  fnClose();
                }}
              />
            </div>
          </dialog>
        </>
      )}
    </>
  );
}
