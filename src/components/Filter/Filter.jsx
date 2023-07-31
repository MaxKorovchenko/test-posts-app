import { useDispatch, useSelector } from 'react-redux';

import { filterPosts } from '../../redux/filter/slice';
import { selectFilter } from '../../redux/filter/selectors';

import styles from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilter = e => {
    dispatch(filterPosts(e.target.value));
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>
        Filter posts
        <input
          className={styles.input}
          type="text"
          value={filter}
          placeholder="Enter some text"
          onChange={handleFilter}
        />
      </label>
    </div>
  );
};
