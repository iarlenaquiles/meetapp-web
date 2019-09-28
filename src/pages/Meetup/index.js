import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Textarea } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import { parseISO } from 'date-fns';
import { Container } from './styles';
import DatePicker from './DatePicker';
import ImagePicker from './ImagePicker';
import api from '~/services/api';

export default function Meetup({ match, history }) {
  const [meetup, setMeetup] = useState([]);
  const { meetupId } = match.params;

  const initMeetup = useCallback(async () => {
    if (meetupId) {
      const response = await api.get(`meetup/${meetupId}`);
      setMeetup({ ...response.data, date: parseISO(response.data.date) });
    }
  }, [meetupId]);

  useEffect(() => {
    initMeetup();
  }, [initMeetup]);

  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <Form initialData={meetup} onSubmit={handleSubmit}>
        <ImagePicker name="File" />
        <Input name="title" placeholder="Título do Meetup" />

        <Textarea
          rows="10"
          resize="false"
          name="description"
          placeholder="Descrição completa"
        />

        <DatePicker name="date" placeholder="Data do meetup" />
        <Input name="location" placeholder="Localização" />

        <button type="submit">
          <MdAddCircleOutline size={20} />
          Salvar meetup
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
