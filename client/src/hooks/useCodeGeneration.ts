import { useState } from "react";

export function useCodeGeneration() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generatedCode, setGeneratedCode] = useState<string | null>(null);
  const [projectId, setProjectId] = useState<string | null>(null);

  async function generateComponent(componentType: string, framework: string, stylePreferences: string) {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/ai/generate-component", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ componentType, framework, stylePreferences }),
      });
      if (!response.ok) {
        throw new Error(`Failed to generate component: ${response.statusText}`);
      }
      const data = await response.json();
      setGeneratedCode(data.code);
      return data.code;
    } catch (err: any) {
      setError(err.message || "Unknown error");
      return null;
    } finally {
      setLoading(false);
    }
  }

  async function buildFromPrompt(prompt: string, mode: "flow" | "webapp" = "webapp") {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/ai/build-from-prompt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt, mode }),
      });
      if (!response.ok) {
        throw new Error(`Failed to build from prompt: ${response.statusText}`);
      }
      const data = await response.json();
      setProjectId(data.project.id);
      return data.project.id;
    } catch (err: any) {
      setError(err.message || "Unknown error");
      return null;
    } finally {
      setLoading(false);
    }
  }

  async function fetchPreview(projectId: string) {
    try {
      const response = await fetch(`/api/preview/${projectId}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch preview: ${response.statusText}`);
      }
      const html = await response.text();
      return html;
    } catch (err: any) {
      setError(err.message || "Unknown error");
      return null;
    }
  }

  return {
    loading,
    error,
    generatedCode,
    projectId,
    generateComponent,
    buildFromPrompt,
    fetchPreview,
  };
}
