import { CropperPosition } from '../interface/cropper-poisition.interface';

export interface ImageCroppedEvent {
    base64?: string | null;
    file?: Blob | null;
    width: number;
    height: number;
    cropperPosition: CropperPosition;
    imagePosition: CropperPosition;
    offsetImagePosition?: CropperPosition;
}
