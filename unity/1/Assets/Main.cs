using UnityEngine;

public static class Main
{
    [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.AfterSceneLoad)]
    private static void OnSceneLoaded()
    {
        Debug.Log($"SystemInfo.graphicsMemorySize: {SystemInfo.graphicsMemorySize}");

#if UNITY_EDITOR
            UnityEditor.EditorApplication.isPlaying = false;
#else
        Application.Quit();
#endif
    }
}