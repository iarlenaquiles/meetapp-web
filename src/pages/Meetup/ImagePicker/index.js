import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { MdCameraAlt } from 'react-icons/md';
import api from '~/services/api';

import { Container, DefaulImg, DefaulImgContent, Img } from './styles';

export default function ImagePicker() {
  const { defaultValue, registerField } = useField('File');
  const { error } = useField('file_id');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  useEffect(() => {
    setFile(defaultValue && defaultValue.id);
    setPreview(defaultValue && defaultValue.url);
  }, [defaultValue]);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'file_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref.current, defaultValue]); // eslint-disable-line

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="file">
        {preview ? (
          <Img src={preview} />
        ) : (
          <>
            <DefaulImg>
              <DefaulImgContent>
                <MdCameraAlt size="54" color="#fff" />
                <span>Selecionar imagem</span>
              </DefaulImgContent>
            </DefaulImg>
          </>
        )}

        <input
          type="file"
          id="file"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
      {error && <span>{error}</span>}
    </Container>
  );
}
