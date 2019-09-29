import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { parseISO } from 'date-fns';
import { Container } from './styles';
import DatePicker from './DatePicker';
import api from '~/services/api';
import ImagePicker from './ImagePicker';
import TextInput from './TextInput';

const schema = Yup.object().shape({
  title: Yup.string().required('Título é obrigatório'),
  description: Yup.string().required('Descrição é obrigatório'),
  location: Yup.string().required('Localização é obrigatório'),
  date: Yup.date().required('Data é obrigatório'),
  file_id: Yup.number().required('Escolha uma image'),
});

export default function Meetup(props) {
  const [meetup, setMeetup] = useState();
  const { match, history } = props;

  const initFetch = useCallback(async () => {
    if (match.params.id) {
      const response = await api.get(`/meetups/${match.params.id}`);
      setMeetup({ ...response.data, date: parseISO(response.data.date) });
    }
  }, [match.params.id]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  async function handleSubmit(value) {
    try {
      if (meetup) {
        await api.put(`/meetups/${meetup.id}`, { ...value });
      } else {
        await api.post(`/meetups`, { ...value });
      }
      history.push('/dashboard');
    } catch (error) {
      console.tron.log(error);
      toast.error(`Error na ${meetup ? 'criação' : 'edição'} do Meetup`);
    }
  }
  return (
    <Container>
      <Form initialData={meetup} schema={schema} onSubmit={handleSubmit}>
        <ImagePicker name="File" />
        <Input name="title" placeholder="Título do Meetup" />
        <TextInput
          rows="10"
          resize="false"
          name="description"
          placeholder="Descrição completa"
        />
        <DatePicker name="date" placeholder="Data do meetup" />
        <Input name="location" placeholder="Localização" />

        <button type="submit">
          {meetup ? 'Alterar Meetup' : 'Criar Meetup'}
        </button>
      </Form>
    </Container>
  );
}

Meetup.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      meetupId: PropTypes.string,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
