import React from 'react';
import { useSelector } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars-2';
import {
  CardListContainer,
  CardListStyled,
  TrackVertical,
  ThumbVertical,
} from './CardList.styled';
import { Card } from './Card';
import { selectStatusFilter } from 'store/filter/selectors';

export const CardList = ({ boardId, cards, columnId }) => {
  const status = useSelector(selectStatusFilter);
  const filteredCards = status.priority
    ? cards.filter(card => card.priority === status.priority)
    : cards;

  return (
    <CardListContainer>
      <Scrollbars
        hideTracksWhenNotNeeded={true}
        renderTrackVertical={({ style, ...props }) => (
          <TrackVertical
            {...props}
            style={{
              ...style,
            }}
          />
        )}
        renderThumbVertical={({ style, ...props }) => (
          <ThumbVertical
            {...props}
            style={{
              ...style,
            }}
          />
        )}
      >
        <CardListStyled>
          {filteredCards.map(
            ({ _id, title, description, priority, deadline, owner }, index) => {
              return (
                <Card
                  key={_id}
                  _id={_id}
                  title={title}
                  description={description}
                  priority={priority}
                  deadline={deadline}
                  index={index}
                  boardId={boardId}
                  columnId={owner}
                />
              );
            }
          )}
        </CardListStyled>
      </Scrollbars>
    </CardListContainer>
  );
};
