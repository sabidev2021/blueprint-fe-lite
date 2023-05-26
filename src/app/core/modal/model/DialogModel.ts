export interface DialogModel {
  style: string;
  type: string;
  pathImg: string;
  cancelButtonLabel: string;
  confirmButtonLabel: string;
  dialogHeader: string;
  dialogContent: string;
  onConfirmSubmit: () => void;
}

export interface DialogCommonModel {
  data: string;
  type: string;
  pathImg: string;
  cancelButtonLabel: string;
  confirmButtonLabel: string;
  dialogHeader: string;
  dialogContent: string;
  onConfirmSubmit: () => void;
}

