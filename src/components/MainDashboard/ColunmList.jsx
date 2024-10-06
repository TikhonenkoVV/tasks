import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Column } from '../MainDashboard/Column';
import { ColumnListStyled } from './ColunmList.styled';
import {
  selectColumns,
  selectIsLoading,
  selectError,
} from 'store/columns/selectors';

import { getColumns } from 'store/columns/operations';
import { Loader } from '../Loader/Loader';

export const ColumnList = ({ boardId }) => {
  const dispatch = useDispatch();
  const columns = useSelector(selectColumns);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  if (error) {
    Notify.warning(error);
  }

  useEffect(() => {
    if (!boardId) {
      return;
    }
    dispatch(getColumns(boardId));
  }, [boardId, dispatch]);

  if (isLoading) {
    return <Loader fill={'#fff'} />;
  }

  if (columns.length > 0) {
    return (
      <ColumnListStyled>
        {columns.map(({ _id, title, createdAt, owner, cards }, index) => (
          <Column
            key={_id}
            index={index}
            owner={owner}
            _id={_id}
            title={title}
            createdAt={createdAt}
            cards={cards}
          />
        ))}
      </ColumnListStyled>
    );
  }
};
