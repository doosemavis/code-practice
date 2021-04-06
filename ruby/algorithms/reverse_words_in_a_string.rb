# Given an input string s, reverse the order of the words.

#  * A word is defined as a sequence of non-space characters. 
# * The words in s will be separated by at least one space.

#todo: Return a string of the words in reverse order concatenated by a single space.

#? Note that (s) may contain leading or trailing spaces or multiple spaces between two words. 
#? The returned string should only have a single space separating the words. 
#! Do not include any extra spaces.

#? Example: 
#? Input => s = "the sky is blue"
#? Output => "blue is sky the"


def reverseWords(s)
    wordsReversed = s.split(" ").reverse.join(" ")
end 

print reverseWords("the sky is blue")