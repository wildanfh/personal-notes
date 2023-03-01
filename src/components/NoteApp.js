import React from "react";
import { getInitialData, showFormattedDate, currentDate } from "../utils";
import NoteAppBody from "./NoteAppBody";
import NoteAppHeader from "./NoteAppHeader";
import { ToastContainer, toast } from "react-toastify";
import NoteAppFooter from "./NoteAppFooter";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddHandler = this.onAddHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onAddHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: showFormattedDate(currentDate()),
            archived: false,
          },
        ],
      };
    });
    toast.success("Catatan Berhasil Dibuat");
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
    toast.error("Note Berhasil Dihapus");
  }

  onArchiveHandler(id) {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.map((note) =>
          note.id === id ? { ...note, archived: !note.archived } : note
        ),
      };
    });
    toast.warning("Catatan Berhasil Dipindahkan");
  }

  onSearchHandler(text) {
    if (text.length === 0) {
      this.setState({
        notes: getInitialData(),
      });
    } else {
      this.setState({
        notes: this.state.notes.filter((note) =>
          note.title.toLowerCase().includes(text.toLowerCase())
        ),
      });
    }
  }

  render() {
    return (
      <>
        <NoteAppHeader onSearch={this.onSearchHandler} />
        <NoteAppBody
          notes={this.state.notes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
          addNote={this.onAddHandler}
        />
        <ToastContainer
          position="bottom-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <NoteAppFooter />
      </>
    );
  }
}

export default NoteApp;
