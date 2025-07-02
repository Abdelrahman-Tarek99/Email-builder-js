import { TEditorConfiguration } from './core';
type TValue = {
    document: TEditorConfiguration;
    selectedBlockId: string | null;
    selectedSidebarTab: 'block-configuration' | 'styles';
    selectedMainTab: 'editor' | 'preview' | 'json' | 'html' | 'test';
    selectedScreenSize: 'desktop' | 'mobile';
    inspectorDrawerOpen: boolean;
    samplesDrawerOpen: boolean;
};
export declare function useDocument(): TEditorConfiguration;
export declare function useSelectedBlockId(): string | null;
export declare function useSelectedScreenSize(): "mobile" | "desktop";
export declare function useSelectedMainTab(): "json" | "html" | "test" | "editor" | "preview";
export declare function setSelectedMainTab(selectedMainTab: TValue['selectedMainTab']): void;
export declare function useSelectedSidebarTab(): "styles" | "block-configuration";
export declare function useInspectorDrawerOpen(): boolean;
export declare function useSamplesDrawerOpen(): boolean;
export declare function setSelectedBlockId(selectedBlockId: TValue['selectedBlockId']): void;
export declare function setSidebarTab(selectedSidebarTab: TValue['selectedSidebarTab']): void;
export declare function resetDocument(document: TValue['document']): void;
export declare function setDocument(document: TValue['document']): void;
export declare function toggleInspectorDrawerOpen(): void;
export declare function toggleSamplesDrawerOpen(): void;
export declare function setSelectedScreenSize(selectedScreenSize: TValue['selectedScreenSize']): void;
export {};
//# sourceMappingURL=EditorContext.d.ts.map