import Form from "components/EditCard/Form";
import { useVideosContext } from "hooks/useVideosContext";

export default function AddVideo() {
  const { videoForm, fnResetForm, fnAddVideo } = useVideosContext();

  function fnSubmit() {
    fnAddVideo(videoForm);
    alert("Vídeo adicionado");
    return fnResetForm();
  }

  return <Form fnSubmit={fnSubmit} />;
}
