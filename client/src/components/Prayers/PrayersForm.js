// import React from 'react'

// export default function PrayersForm(props) {
//   const { values, update, submit } = props

//   const onChange = evt => {
//     const name = evt.target.name;
//     const value = evt.target.value;
//     update(name, value);
//   }

//   const onSubmit = evt => {
//     evt.preventDefault();
//     submit();
//   }

//   return (
//     <form className='form container' onSubmit={onSubmit}>
//       <div className='form-group inputs'>
//         <label>Who said Opening Prayer?
//           <input
//             name="name"
//             type="text"
//             placeholder="Type in a name ya chump!"
//             maxLength="30"
//             value={values.opening_prayer}
//             onChange={onChange}
//           />
//         </label>

//         <label>Closing Prayer
//           <input
//             name="name"
//             type="text"
//             placeholder="Type in an name ya chump!"
//             value={values.closing_prayer}
//             onChange={onChange}
//           />
//         </label>
//         <label>Date
//           <input
//             name="date"
//             type="date"
//             placeholder="Type in an date ya chump!"
//             value={values.date}
//             onChange={onChange}
//           />
//         </label>
//         <label>Role
//           <select value={values.role} name="role" onChange={onChange}>
//             <option value="">-- Select a Role --</option>
//             <option value="Student">Student</option>
//             <option value="Instructor">Instructor</option>
//             <option value="Alumni">Alumni</option>
//           </select>
//         </label>
//         <div className='submit'>
//           <button>submit</button>
//         </div>
//       </div>
//     </form>
//   )
// }
