import { CellValue, RowKey, ColumnInfo, ListItem, Dictionary } from '../store/types';
import Grid from '../grid';

export type CheckboxOptions = ListItemOptions & {
  type: 'checkbox' | 'radio';
};

export type PortalEditingKeydown = (ev: KeyboardEvent) => void;

export interface CellEditorProps {
  grid: Grid;
  rowKey: RowKey;
  columnInfo: ColumnInfo;
  value: CellValue;
  formattedValue: string;
  width: number;
  portalEditingKeydown: PortalEditingKeydown;
}

export interface CellEditor {
  getElement(): HTMLElement | undefined;
  getValue(): CellValue;
  mounted?(): void;
  beforeDestroy?(): void;
  el?: HTMLElement;
}

export interface ListItemOptions {
  listItems: ListItem[];
  relationListItemMap?: Dictionary<ListItem[]>;
}

export interface CellEditorClass {
  new (props: CellEditorProps): CellEditor;
}
