import { create } from 'zustand';
import getConfiguration from '../../getConfiguration';
const editorStateStore = create(() => ({
    document: getConfiguration(window.location.hash),
    selectedBlockId: null,
    selectedSidebarTab: 'styles',
    selectedMainTab: 'editor',
    selectedScreenSize: 'desktop',
    inspectorDrawerOpen: true,
    samplesDrawerOpen: true,
}));
export function useDocument() {
    return editorStateStore((s) => s.document);
}
export function useSelectedBlockId() {
    return editorStateStore((s) => s.selectedBlockId);
}
export function useSelectedScreenSize() {
    return editorStateStore((s) => s.selectedScreenSize);
}
export function useSelectedMainTab() {
    return editorStateStore((s) => s.selectedMainTab);
}
export function setSelectedMainTab(selectedMainTab) {
    return editorStateStore.setState({ selectedMainTab });
}
export function useSelectedSidebarTab() {
    return editorStateStore((s) => s.selectedSidebarTab);
}
export function useInspectorDrawerOpen() {
    return editorStateStore((s) => s.inspectorDrawerOpen);
}
export function useSamplesDrawerOpen() {
    return editorStateStore((s) => s.samplesDrawerOpen);
}
export function setSelectedBlockId(selectedBlockId) {
    const selectedSidebarTab = selectedBlockId === null ? 'styles' : 'block-configuration';
    const options = {};
    if (selectedBlockId !== null) {
        options.inspectorDrawerOpen = true;
    }
    return editorStateStore.setState(Object.assign({ selectedBlockId,
        selectedSidebarTab }, options));
}
export function setSidebarTab(selectedSidebarTab) {
    return editorStateStore.setState({ selectedSidebarTab });
}
export function resetDocument(document) {
    return editorStateStore.setState({
        document,
        selectedSidebarTab: 'styles',
        selectedBlockId: null,
    });
}
export function setDocument(document) {
    const originalDocument = editorStateStore.getState().document;
    return editorStateStore.setState({
        document: Object.assign(Object.assign({}, originalDocument), document),
    });
}
export function toggleInspectorDrawerOpen() {
    const inspectorDrawerOpen = !editorStateStore.getState().inspectorDrawerOpen;
    return editorStateStore.setState({ inspectorDrawerOpen });
}
export function toggleSamplesDrawerOpen() {
    const samplesDrawerOpen = !editorStateStore.getState().samplesDrawerOpen;
    return editorStateStore.setState({ samplesDrawerOpen });
}
export function setSelectedScreenSize(selectedScreenSize) {
    return editorStateStore.setState({ selectedScreenSize });
}
//# sourceMappingURL=EditorContext.js.map