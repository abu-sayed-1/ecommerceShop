//Create Token And saving in cookie

const sendToken = async (user, statusCode, res) => {
  const token = user.getJWTToken();

  const options = {
    expires: new Date(Date.now() + 10000000),
    secure: false,
    httpOnly: true,
  };
  await res.cookie("token", token, options).status(statusCode).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;
