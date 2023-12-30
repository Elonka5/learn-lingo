import { IoBookOutline } from 'react-icons/io5';
import { FaStar } from 'react-icons/fa';
import { IoMdHeartEmpty } from 'react-icons/io';

const TeacherCard = ({ teacher }) => {
  const {
    name,
    surname,
    languages,
    levels,
    rating,
    reviews,
    price_per_hour,
    lessons_done,
    avatar_url,
    lesson_info,
    conditions,
    experience,
  } = teacher;

  return (
    <li>
      <img src={avatar_url} alt="avatar" />
      <div>
        <p>Languages</p>
        <ul>
          <IoBookOutline />
          <li>Lessons online</li>
          <li>Lessons done: {lessons_done}</li>
          <FaStar />
          <li>Rating:{rating}</li>
          <li>Price / 1 hour: {price_per_hour}</li>
        </ul>
        <IoMdHeartEmpty />
        <h2>
          {name} {surname}
        </h2>
        <div>
          <ul>
            <li>Speaks:{languages}</li>
            <li>Lesson Info:{lesson_info}</li>
            <li>Conditions:{conditions}</li>
          </ul>
          <p>{experience}</p>
        </div>
        <div>
          <ul>
            {reviews.map((review, index) => (
              <li key={index}>
                <p>{review.reviewer_name}</p>
                <p>{review.reviewer_rating}</p>
                <p>{review.comment}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {levels.map((level, index) => (
              <li key={index}>{level}</li>
            ))}
          </ul>
        </div>
        <button>Book trial lesson</button>
      </div>
    </li>
  );
};

export default TeacherCard;
