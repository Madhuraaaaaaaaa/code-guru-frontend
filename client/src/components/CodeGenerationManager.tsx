import React, { useState, useEffect } from "react";
import { useCodeGeneration } from "../hooks/useCodeGeneration";

export const CodeGenerationManager: React.FC = () => {
  const {
    loading,
    error,
    generatedCode,
    projectId,
    generateComponent,
    buildFromPrompt,
    fetchPreview,
  } = useCodeGeneration();

  const [prompt, setPrompt] = useState("");
  const [previewHtml, setPreviewHtml] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      alert("Please enter a prompt");
      return;
    }
    const id = await buildFromPrompt(prompt);
    if (id) {
      const html = await fetchPreview(id);
      setPreviewHtml(html);
    }
  };

  useEffect(() => {
    if (projectId) {
      fetchPreview(projectId).then(setPreviewHtml);
    }
  }, [projectId, fetchPreview]);

  return (
    <div>
      <h2>AI Code Generation and Deployment</h2>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter prompt to generate website"
        rows={4}
        style={{ width: "100%" }}
      />
      <button onClick={handleGenerate} disabled={loading}>
        {loading ? "Generating..." : "Generate and Deploy"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {generatedCode && (
        <div>
          <h3>Generated Code:</h3>
          <pre style={{ whiteSpace: "pre-wrap", backgroundColor: "#f0f0f0", padding: "1em" }}>
            {generatedCode}
          </pre>
        </div>
      )}
      {previewHtml && (
        <div>
          <h3>Preview:</h3>
          <iframe
            title="Generated Website Preview"
            srcDoc={previewHtml}
            style={{ width: "100%", height: "500px", border: "1px solid #ccc" }}
          />
        </div>
      )}
    </div>
  );
};
