import "./CreateProject.css";
import { useNavigate } from "react-router-dom";
import { createproject } from "../hooks/apis/mutations/useCreateProject";
import { Button } from "antd";

export const CreateReactPage = () => {
  const navigate = useNavigate();
  const { createprojectmutation, isPending } = createproject();

  const handleOnClick = async () => {
    const response = await createprojectmutation();
    navigate(`/projects/${response.data}`);
  };

  return (
    <div className="create-page">
      <div className="create-card">
        <div className="create-title">Create React Playground</div>
        <div className="create-subtitle">
          One click → full online IDE
        </div>

        <Button
          type="primary"
          loading={isPending}
          className="create-btn"
          onClick={handleOnClick}
        >
          🚀 Create Playground
        </Button>
      </div>
    </div>
  );
};
