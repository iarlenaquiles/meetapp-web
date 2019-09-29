import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { MdEdit, MdDeleteForever, MdEvent, MdLocationOn } from 'react-icons/md';
import { Container, Content, Img } from './styles';
import api from '~/services/api';
import formatDate from '~/util/formatDate';

class Meetup {
  File = { url: '', name: '' };
}

export default function Details({ match, history }) {
  const [meetup, setMeetup] = useState(new Meetup());
  console.log('id details', match);
  const initMeetup = useCallback(async () => {
    const response = await api.get(`/meetups/${match.params.id}`);

    setMeetup({ ...response.data });
  }, [match.params.id]);

  useEffect(() => {
    initMeetup();
  }, [initMeetup]);

  async function cancelMeetup(id) {
    await api.delete(`/meetups/${id}`);
    history.push('/dashboard');
  }

  return (
    <Container>
      <header>
        <strong>{meetup.title}</strong>
        <div>
          <Link to={`/meetup/edit/${meetup.id}`}>
            <button type="button" className="editar">
              <MdEdit color="#fff" size={20} />
              Editar
            </button>
          </Link>

          <button
            type="button"
            className="cancelar"
            onClick={() => cancelMeetup(meetup.id)}
          >
            <MdDeleteForever color="#fff" size={20} />
            Cancelar
          </button>
        </div>
      </header>

      <Content>
        <Img src={meetup.File.url} />

        <strong>{meetup.description}</strong>

        <div>
          <span>
            <MdEvent size={20} />
            <span>{meetup.date && formatDate(meetup.date)}</span>
          </span>
          <span>
            <MdLocationOn size="20" />
            <span>{meetup.location}</span>
          </span>
        </div>
      </Content>
    </Container>
  );
}
