import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { io } from "socket.io-client";

import "./PlayGround.css";

import { TreeStructure } from "../component/Organisms/TreeStructure/TreeStructure";
import { EditorComponent } from "../component/Molecules/EditorComponent/Editor";
import { BrowserTerminal } from "../component/Molecules/BrowserTerminal/BrowserTerminal";
import { Browser } from "../component/Organisms/TreeStructure/Browser/Browser";
import { Loading } from "../component/Organisms/TreeStructure/Browser/Loading";
import { FolderContextModal } from "../component/Molecules/Modals/FolderContextModal";

import { useEditorsocketStore } from "../store/editorSocketStore";
import { treeStructureStore } from "../store/treeStructureStore";
import { useContainerPortStore } from "../store/ContainerPortStore";

import { Allotment } from "allotment";
import "allotment/dist/style.css";

export const PlayGround = () => {
  const { projectId: projectIDfromURL } = useParams();

  const { editorSocket, setEditorSocket } = useEditorsocketStore();
  const { setprojectId } = treeStructureStore();
  const { containerPort } = useContainerPortStore();

  useEffect(() => {
    if (!projectIDfromURL) return;

    setprojectId(projectIDfromURL);

    const editorSocketConn = io(
      `${import.meta.env.VITE_BACKEND_URL}/editor`,
      {
        query: { id: projectIDfromURL },
      }
    );

    setEditorSocket(editorSocketConn);

    return () => {
      editorSocketConn.disconnect();
    };
  }, [projectIDfromURL, setEditorSocket, setprojectId]);

  return (
    <div className="playground-root">
      <FolderContextModal />

      {/* LEFT SIDEBAR */}
      <div className="sidebar">
        <TreeStructure />
      </div>

      {/* RIGHT MAIN AREA */}
      <div className="main-area">
        <Allotment>
          {/* EDITOR + TERMINAL */}
          <Allotment vertical>
            <div className="editor-container">
              {editorSocket && <EditorComponent />}
            </div>

            <div className="terminal-container">
              {editorSocket && <BrowserTerminal />}
            </div>
          </Allotment>

          {/* BROWSER PREVIEW */}
          <div className="browser-area">
            {containerPort ? <Browser /> : <Loading />}
          </div>
        </Allotment>
      </div>
    </div>
  );
};
