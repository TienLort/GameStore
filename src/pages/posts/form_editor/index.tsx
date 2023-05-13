import React, { useRef } from 'react';

import { useAppDispatch } from 'src/redux_store';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import {
  align,
  blockquote,
  font,
  fontColor,
  fontSize,
  formatBlock,
  hiliteColor,
  horizontalRule,
  image,
  lineHeight,
  link,
  list,
  paragraphStyle,
  table,
  template,
  textStyle,
} from 'suneditor/src/plugins';

interface IProps {
  body: string;
  height: number;
  handleChangeBody: (value: string) => void;
}

const FormEditor = ({ body, handleChangeBody, height }: IProps) => {
  const dispatch = useAppDispatch();

  const editor = useRef();

  const handleChange = (content: string) => {
    handleChangeBody(content);
  };

  const getSunEditorInstance = (sunEditor: any) => {
    editor.current = sunEditor;
  };

  const handleImageUploadBefore = (files: any, info: any, uploadHandler: any) => {
    const uploadFile = files[0];
    const formData = new FormData();
    formData.append('files', uploadFile);

  };

  return (
    <SunEditor
      onChange={handleChange}
      name="editor_form"
      setContents={body}
      placeholder="Enter your content !!!"
      width="100%"
      height={String(height - 110)}
      getSunEditorInstance={getSunEditorInstance}
      onImageUploadBefore={handleImageUploadBefore}
      setOptions={{
        plugins: [
          align,
          font,
          fontColor,
          blockquote,
          fontSize,
          formatBlock,
          hiliteColor,
          horizontalRule,
          lineHeight,
          list,
          paragraphStyle,
          table,
          template,
          textStyle,
          image,
          link,
        ],
        buttonList: [
          ['undo', 'redo'],
          ['font', 'fontSize', 'formatBlock'],
          ['paragraphStyle'],
          ['blockquote'],
          ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
          ['fontColor', 'hiliteColor'],
          ['removeFormat'],
          ['outdent', 'indent'],
          ['align', 'horizontalRule', 'list', 'lineHeight'],
          ['table', 'link', 'image'],
          ['codeView', 'preview', 'print'],
          ['save'],
        ],
        formats: ['p', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
        font: ['Arial', 'Open Sans ', 'Moon Dance', 'Lato', 'Quicksand', 'Roboto'],
      }}
    />
  );
};

export default FormEditor;
