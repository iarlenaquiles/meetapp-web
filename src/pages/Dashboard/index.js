import React, { useState, useEffect, useCallback } from 'react';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import api from '~/services/api';
import { Container, Meetup } from './styles';
import formatDate from '~/util/formatDate';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  const initMeetups = useCallback(async () => {
    const response = await api.get(`organizing`);
    response.data.map(item => {
      item.formattedDate = formatDate(item.date);
      return item;
    });
    setMeetups(response.data);
  }, []);

  useEffect(() => {
    initMeetups();
  }, [initMeetups]);

  function handleNewMeetup() {}

  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>
        <Link to="/meetup/create">
          <button type="button" onClick={handleNewMeetup}>
            <MdAddCircleOutline color="#fff" size={20} />
            Novo meetup
          </button>
        </Link>
      </header>

      <ul>
        {meetups.map(meetup => (
          <Link to={`/details/${meetup.id}`}>
            <Meetup key={meetup.id.toString()} past={meetup.past}>
              <strong>{meetup.title}</strong>
              <div>
                <span>{meetup.formattedDate}</span>
                <MdChevronRight size={20} color="#fff" />
              </div>
            </Meetup>
          </Link>
        ))}
      </ul>
    </Container>
  );
}
