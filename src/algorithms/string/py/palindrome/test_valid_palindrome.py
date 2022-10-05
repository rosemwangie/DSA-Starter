from valid_palindrome import is_palindrome


def test_is_valid_palindrome_true():
    assert True == is_palindrome("madam")


def test_is_valid_palindrome_false():
    assert False == is_palindrome("eat")
