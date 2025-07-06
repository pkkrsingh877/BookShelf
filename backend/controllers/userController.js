import User from '../models/userSchema.js';

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    const user = User.findById(id);

    if(user){
        await User.findByIdAndDelete(id);
    }else{
        res.status(404).json({ error: "User Not Found!" });
    }

    res.status(204).json({ success: "User Deleted Successfully!"});
}

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, image, password } = req.body;
    const user = User.findById(id);

    if(user){
        const updatedUser = await User.findByIdAndUpdate(id, {
            username, image, password
        });
    }else{
        res.status(404).json({ error: "User Not Found!" });
    }

    res.status(204).json({ success: "User Updated Successfully!", updatedUser });
}

export const loginUser = async (req, res) => {
  const { username, password, image } = req.body;

  try {
    const user = await User.create({ username, password, image });
    res.status(201).json({ success: 'User created successfully', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const signupUser = async (req, res) => {
  const { username, password, image } = req.body;

  try {
    const user = await User.create({ username, password, role, image });
    res.status(201).json({ success: 'User created successfully', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};