import Book from '../models/bookSchema';

// Create a controller for book search(query)

export const getBook = async (req, res) => {
    try {
        const { bookId } = req.params;
        const book = await Book.findById(bookId);
        if(book){
            res.status(200).json({ "success": "Book Found!", book });
        }
    } catch (error) {
        res.status(400).json({ "failure": "Book Not Found!", error });
    }
}

export const postBook = async (req, res) => {
    try {
        const { title, description, image, author, addedBy } = req.body;
        const book = await Book.create({ title, description, image, addedBy, author });
        if(book){
            res.status(200).json({ "success": "Book Added!", book });
        }
    } catch (error) {
        res.status(400).json({ "failure": "Book Creation Failed!", error });
    }
}

export const updateBook = async (req, res) => {
    try {
        const { id, title, description, image, author } = req.body;
        const userId = req.user.id;

        // Fetch the book first to verify ownership
        const book = await Book.findById(id);

        if (!book) {
            return res.status(404).json({ failure: "Book not found!" });
        }

        if (book.addedBy.toString() !== userId) {
            return res.status(403).json({ failure: "Unauthorized: You can only update books you added." });
        }

        // Update the book
        book.title = title;
        book.description = description;
        book.image = image;
        book.author = author;

        const updatedBook = await book.save();

        res.status(200).json({ success: "Book Updation Successful!", book: updatedBook });
    } catch (error) {
        res.status(400).json({ failure: "Book Updation Failed!", error });
    }
};


export const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;

        const book = await Book.findById(id);

        if (!book) {
            return res.status(404).json({ failure: "Book not found!" });
        }

        if (book.addedBy.toString() !== userId) {
            return res.status(403).json({ failure: "Unauthorized: You can only delete books you added." });
        }

        await book.deleteOne();

        res.status(200).json({ success: "Book Deletion Successful!", book });
    } catch (error) {
        res.status(400).json({ failure: "Book Deletion Failed!", error });
    }
};
