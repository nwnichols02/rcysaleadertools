import React from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const initialFormValues = {
  prayer_name_opening: "",
  prayer_name_closing: "",
  prayer_date: "",
};

export default function EditCustomer(props) {
  let params = useParams();
  const [formValues, setFormValues] = useState(initialFormValues);

  const navigate = useNavigate();
  const prayerRoute = () => {
    navigate("/prayerlist");
  };

  const submitForm = () => {
    const newForm = {
      prayer_name_opening: formValues.prayer_name_opening,
      prayer_name_closing: formValues.prayer_name_closing,
      prayer_date: formValues.prayer_date,
      //   checkbox: prayer.checkbox,
    };
    axios
      .put(`http://localhost:9000/api/prayers/${params.id}`, newForm)
      .then((res) => {
        setFormValues([res.data]);
      })
      .then((res) => {
        setFormValues(initialFormValues);
      })
      .catch((err) => console.log(err));
  };

  const updateForm = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const onChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    updateForm(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submitForm();
  };

  useEffect(() => {
    let id = params.id;
    getCustomerById(id);
  }, []);

  const getCustomerById = (id) => {
    axios
      .get(`http://localhost:9000/api/prayers/${id}`)
      .then((res) => {
        setFormValues(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button onClick={prayerRoute}>Back</button>
      <h1>EDIT</h1>
      <form className="form container" onSubmit={onSubmit}>
        <div className="form-group inputs">
          <label>
            Who said Opening Prayer?
            <input
              name="prayer_name_opening"
              type="text"
              placeholder="Type in a name ya chump!"
              maxLength="30"
              value={formValues.prayer_name_opening}
              onChange={onChange}
            />
          </label>

          <label>
            Closing Prayer
            <input
              name="prayer_name_closing"
              type="text"
              placeholder="Type in an name ya chump!"
              value={formValues.prayer_name_closing}
              onChange={onChange}
            />
          </label>
          <label>
            Date
            <input
              name="prayer_date"
              type="date"
              placeholder="Type in an date ya chump!"
              value={formValues.prayer_date}
              onChange={onChange}
            />
          </label>
          {/* <label>
          Role
          <select value={prayer.role} name="role" onChange={onChange}>
            <option value="">-- Select a Role --</option>
            <option value="Student">Student</option>
            <option value="Instructor">Instructor</option>
            <option value="Alumni">Alumni</option>
          </select>
        </label> */}
          <div className="submit">
            <button>submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}
