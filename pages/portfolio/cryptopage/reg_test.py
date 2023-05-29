import pandas as pd
import numpy as np

# load the data into a Pandas dataframe
data = pd.read_csv('/Users/andrewhilseberg/Desktop/regtest.csv')
import statsmodels.api as sm
from statsmodels.formula.api import ols


# Convert the Firm and Product columns to categorical data types
data['Firm'] = pd.Categorical(data['firm'])
data['Product'] = pd.Categorical(data['product'])
print(data)

# Fit a two-way ANOVA model
model = ols('product_sales ~ C(Firm) + C(Product) + C(Firm):C(Product)', data=data).fit()
print(model) 

# Perform an ANOVA test
table = sm.stats.anova_lm(model, typ=2)

print(table)
