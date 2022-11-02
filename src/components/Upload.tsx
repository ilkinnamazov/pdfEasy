import { useEffect, useState } from "react";
import { Button } from "@mui/material";
type UploadProps = {
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
};
export default function Upload({ setFiles }: UploadProps) {
  useEffect(() => {
    const fileInput = document.getElementById("file__upload") as HTMLInputElement;
    const eventHandler = (): void => {
      setFiles((prevState) => [...prevState, fileInput.files![0] as File]);
    };
    fileInput.addEventListener("change", eventHandler);
    return () => {
      fileInput.removeEventListener("change", eventHandler);
    };
  }, []);

  return (
    <Button variant="contained" component="label">
      Upload File
      <input id="file__upload" type="file" hidden />
    </Button>
  );
}
