import {FileWithPath} from '@mantine/dropzone';
import {StateSetter} from '../../shared/types';

export interface UploaderCommonProps {
  fileList: FileWithPath[];
  setFileList: StateSetter<FileWithPath[]>
}